
// Resource links open their test instructions before scrolling into view.
function revealLinkedTests() {
    const target = document.getElementById(location.hash.slice(1));
    if (target?.matches('details.test-procedure')) {
        target.open = true;
        target.scrollIntoView({ block: 'center' });
    }
}
window.addEventListener('hashchange', revealLinkedTests);
document.querySelectorAll('a.artifact-tests').forEach(link => {
    link.addEventListener('click', () => {
        const target = document.getElementById(link.hash.slice(1));
        if (target) target.open = true;
    });
});
revealLinkedTests();

function updateTime() {
    const now = new Date();
    const zone = { timeZone: 'Africa/Tunis' };
    const parts = new Intl.DateTimeFormat('en-US', { ...zone, hour: '2-digit', minute: '2-digit', hour12: true }).formatToParts(now);
    const value = type => parts.find(part => part.type === type)?.value || '';
    document.getElementById('timeDisplay').innerHTML = value('hour') + ':' + value('minute') + '<span class="time-period">' + value('dayPeriod') + '</span>';
    document.getElementById('timeDate').textContent = now.toLocaleDateString('en-US', { ...zone, weekday: 'short', month: 'short', day: 'numeric' });
    const hour = Number(new Intl.DateTimeFormat('en-GB', { ...zone, hour: 'numeric', hourCycle: 'h23' }).format(now));
    const phase = hour >= 5 && hour < 11 ? 'morning' : hour >= 11 && hour < 17 ? 'day' : hour >= 17 && hour < 20 ? 'sunset' : 'night';
    const card = document.querySelector('.time-card');
    card.classList.remove('state-morning', 'state-day', 'state-sunset', 'state-night');
    card.classList.add('state-' + phase);
    document.getElementById('timePhase').textContent = { morning: 'Morning in Tunisia', day: 'Afternoon in Tunisia', sunset: 'Evening in Tunisia', night: 'Night in Tunisia' }[phase];
    const difference = 60 + now.getTimezoneOffset();
    const hours = Math.floor(Math.abs(difference) / 60);
    const minutes = Math.abs(difference) % 60;
    const duration = [hours ? hours + (hours === 1 ? ' hour' : ' hours') : '', minutes ? minutes + ' min' : ''].filter(Boolean).join(' ');
    document.getElementById('timeDifference').textContent = difference === 0 ? 'Same time as you' : duration + (difference > 0 ? ' ahead of you' : ' behind you');
}

updateTime();
setInterval(updateTime, 30000);
