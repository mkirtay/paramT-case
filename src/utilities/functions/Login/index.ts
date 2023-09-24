export function getActiveUser() {
    const activeUser = localStorage.getItem("active");
    return activeUser ? JSON.parse(activeUser) : null;
}
