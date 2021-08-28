const cardContainer = (name, rating, tags) => {
    return `
                <div class="card">
                    <h3>${name}</h3>
                    <div>
                        <div>
                            <p>Rating: ${rating}</p>
                        </div>
                        <div>
                            <p>Tags: ${tags.length}</p>
                        </div>
                    </div>
                </div>
            `;
}