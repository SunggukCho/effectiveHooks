const useConfirm = (message="", callback, rejection) => {
  if (typeof callback !== "function") {
    return;
  }
  const confirmAction = () => {
    if (window.confirm(message)) {
      // ok
      callback();
    } else {
      // cancel
      rejection();
    }
  }
  return confirmAction
}

export default useConfirm