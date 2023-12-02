const ALARM_NAME = 'timer alarm';
let alarmPeriodInMinutes;

const createAlarm = (periodInMinutes) => {
    console.log(`Creating alarm for ${periodInMinutes} minutes`);
    alarmPeriodInMinutes = periodInMinutes;
    chrome.alarms.create(ALARM_NAME, { periodInMinutes });
};

chrome.runtime.onMessage.addListener((request) => {
    chrome.alarms.clearAll();
    createAlarm(request.periodInMinutes);
});

chrome.notifications.onButtonClicked.addListener((notification) => {
    createAlarm(alarmPeriodInMinutes);
    chrome.notifications.clear(notification);
});

chrome.alarms.onAlarm.addListener((alarm) => {
    chrome.notifications.create(
        'timer-notification',
        {
            type: 'basic',
            iconUrl: '/images/hourGlassIcon.png',
            title: 'Sorry to interrupt, but ...',
            message: `Your ${alarm.periodInMinutes}-minute timer has expired`,
            silent: false,
            requireInteraction: true,
            buttons: [
                {
                    title: 'Repeat',
                },
            ],
        },
        () => {
            console.log('Notification created, clearing alarms');
            chrome.alarms.clearAll();
        }
    );
});

chrome.runtime.onStartup.addListener(() => {
    console.log('Chrome opened');
    chrome.alarms.clearAll();
});
