 // 1. Target the elements
    const statusBtn = document.getElementById('status-btn');
    const statusText = document.getElementById('status-text');

    // 2. Track click count
    let clickCount = 0;

    // 3. Listen for clicks and execute changes
    statusBtn.addEventListener('click', () => {
      clickCount++;

      if (clickCount % 2 === 1) {
        statusText.textContent = `Status: Active Developer (Clicks: ${clickCount})`;
        statusText.style.color = '#16a34a'; // Green
        statusBtn.textContent = 'Reset Status';
      } else {
        statusText.textContent = `Status: Standby (Clicks: ${clickCount})`;
        statusText.style.color = '#64748b'; // Gray
        statusBtn.textContent = 'Check Status';
      }
    });