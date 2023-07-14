$(document).ready(function() {
    $('#formSelect').select2({
      minimumResultsForSearch: Infinity, // Disable search functionality
      templateResult: function(option) {
        if (option.id === '1') {
          // Custom template for the first option
          return $('<span>').html(option.text.replace(/Free/, '<span class="highlight">Free</span>'));
        }
        return option.text;
      },
      templateSelection: function(option) {
        if (option.id === '1') {
          // Custom template for the selected first option
          var highlightedText = option.text.replace(/Free/, '<span class="highlight">$&</span>');
          return $('<span>').html(highlightedText);
        }
        return option.text;
      }
    });
  });