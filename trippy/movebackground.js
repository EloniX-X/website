const syncPointer = ({ x, y }) => {
    document.documentElement.style.setProperty('--x', x.toFixed(2))
    document.documentElement.style.setProperty(
      '--xp',
      (x / window.innerWidth).toFixed(2)
    )
    document.documentElement.style.setProperty('--y', y.toFixed(2))
    document.documentElement.style.setProperty(
      '--yp',
      (y / window.innerHeight).toFixed(2)
    )
  }
  document.body.addEventListener('pointermove', syncPointer)

document.addEventListener('DOMContentLoaded', function () {
  var switches = document.querySelectorAll('#freetier .switch input[type="checkbox"]');
  var secondswitches = document.querySelectorAll('#EssentialsTier .switch input[type="checkbox"]');

  switches.forEach(function(switchEl) {
      switchEl.addEventListener('change', function() {
          var isChecked = this.checked;
          switches.forEach(function(s, index) {
              setTimeout(function() {
                  s.checked = isChecked;
              }, index * 30);
          });
      });
  
  
  secondswitches.forEach(function(switchery) {
      switchery.addEventListener('change', function() {
          var isChecked = this.checked;
          secondswitches.forEach(function(s, index) {
              setTimeout(function() {
                  s.checked = isChecked;
              }, index * 30);
          });
      });
  });
  });


});

document.addEventListener('DOMContentLoaded', function () {
    var downArrows = document.querySelectorAll('.downarrow');

    downArrows.forEach(function(arrow) {
        arrow.addEventListener('click', function() {
            var currentHiddendot = this.closest('.titleofdowndrops').querySelector('.hiddendot');
            var allHiddendots = document.querySelectorAll('.hiddendot');
            var wasExpanded = currentHiddendot.classList.contains('expanded');

            allHiddendots.forEach(function(hd) {
                var parentArrow = hd.closest('.titleofdowndrops').querySelector('.downarrow');
                hd.classList.remove('expanded');
                parentArrow.classList.remove('rotate-up');
                parentArrow.classList.add('rotate-down');
            });

            if (!wasExpanded) {
                currentHiddendot.classList.add('expanded');
                this.classList.remove('rotate-down');
                this.classList.add('rotate-up');
            }
        });
    });
});
