const errorMessage = (message, error) => {
    return `
            <div class="error">
                <p>${message}</p>
                <p>${error}</p>
            </div>
        `;
}