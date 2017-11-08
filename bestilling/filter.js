//JQuery script som gir filterfunksjonen
var $filterCheckboxes = $('input[type="checkbox"]');
$filterCheckboxes.on('change', function() {
  
  var selectedFilters = {};
  $filterCheckboxes.filter(':checked').each(function() {
    
    if (!selectedFilters.hasOwnProperty(this.name)) {
      selectedFilters[this.name] = [];
    }
    selectedFilters[this.name].push(this.value);
  });
  
  // Lager en samling med alle filtrerbare elementene
  var $filteredResults = $('.hytte');
  //looper over det valgte filternavnene 
  $.each(selectedFilters, function(name, filterValues) {

    // filtrerer hvert .hytte element
    $filteredResults = $filteredResults.filter(function() {

      var matched = false,
        currentFilterValues = $(this).data('category').split(' ');

      //looper over hver kategori-verdi i det gjeldende .hytte's data-kategori
      $.each(currentFilterValues, function(_, currentFilterValue) {
        //hvis den gjeldende kategorien eksiteter i slectedFilters arrayen
        // sett matched til true og break loopen

        if ($.inArray(currentFilterValue, filterValues) != -1) {
          matched = true;
          return false;
        }
      });
      //hvis matched er true så er det gjeldene .hytte elementet returnert
      return matched;
    });
  });
  $('.hytte').hide().filter($filteredResults).show();
});