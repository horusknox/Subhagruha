function displayAlert(title, message, status) {
    let text, icon;
    text = message === undefined ? 'Something went wrong' : message;
    if (status === 0 || status === "error") {
      icon = 'error';
    } else if (status === 1 || status === "success") {
      icon = 'success';
    } else {
      // Handle other cases here
      return;
    }
  
    Swal.fire({
      title: title,
      text: text,
      icon: icon,
      customClass: {
        container: 'rounded-sweetalert', // Your custom CSS class
        confirmButton: 'custom-ok-button'
      }
    });
  }