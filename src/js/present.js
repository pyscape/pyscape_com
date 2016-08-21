$(function() {
    var _present = function() {
        self = this;

        this.present = $('.present');

        this._activeSections = [];
        this._sections = [];

        this._init = function() {
            var count, itr, subLength;
            var length = self.present.length;
            for(count=0; count<length; count+=1) {
                self._sections[count] = $(self.present[count]).find('section');
                self._sections[count].hide();
                self._activeSections[count] = [];
                subLength = self._sections[count].length;
                for(itr=0; itr<length; itr+=1) {
                    self._activeSections[count][itr] = false;
                }
            }
            self._showFirst();
            self._cycle();
        };

        this._showFirst = function() {
            var count;
            for(count in self._sections) {
                if(count === 'length') {
                    continue;
                }
                self._activeSections[count][0] = true;
                $(self._sections[count][0]).show();
            }
        }

        this._cycle = function() {
            var count, itr, nextItr;
            for(count in self._activeSections) {
                if(count === 'length') {
                    continue;
                }
                for(itr in self._activeSections[count]) {
                    if(itr === 'length' ||
                            self._activeSections[count][itr] !== true) {
                        continue;
                    }
                    itr = parseInt(itr);
                    nextItr = itr + 1;
                    if(typeof(self._sections[count][nextItr]) === 'undefined') {
                        nextItr = 0;
                    }
                    self._activeSections[count][itr] = false;
                    self._activeSections[count][nextItr] = true;
                    $(self._sections[count][itr]).hide();
                    $(self._sections[count][nextItr]).show();
                    break;
                }
            }
            setTimeout(self._cycle, 3000)
        };

        _init();
    }
    _present();
});
