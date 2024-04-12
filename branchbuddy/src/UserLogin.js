function UserLogin() {
    // Function to handle logout
    function handleLogout() {
        // Perform logout action here, e.g., redirect to logout page
        alert("Logging out...");
        window.location.href = "logout.php"; // Example of redirecting to logout page
    }

    // JSX for header with dropdown menu
    return (
        <div class="header">
            <div class="dropdown" id="dropdownMenu">
                <a href="#" class="dropbtn" id="menuBtn">{username}</a>
                <div class="dropdown-content" id="dropdownContent">
                    <a href="#" onClick={handleLogout}>Logout</a>
                </div>
            </div>
        </div>
    );
}
export default UserLogin;