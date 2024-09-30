$(document).ready(function() {
    $('#search-button').click(function() {
        performSearch();
    });

    $('#search-input').keypress(function(e) {
        if (e.which == 13) {
            performSearch();
        }
    });

    function performSearch() {
        var searchTerm = $('#search-input').val().trim();
        if (searchTerm !== '') {
            // In a real application, you would make an API call to search for news
            // For this example, we'll just display a mock result
            var mockResult = `
                <h3>Search Results for "${searchTerm}"</h3>
                <ul>
                    <li>Article 1 about ${searchTerm}</li>
                    <li>Article 2 related to ${searchTerm}</li>
                    <li>Article 3 mentioning ${searchTerm}</li>
                </ul>
            `;
            $('#search-results').html(mockResult);
        } else {
            $('#search-results').html('<p>Please enter a search term.</p>');
        }
    }
});