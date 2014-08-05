var hpaSummaryFeature = (
{
    /**
     * Initialize component
     * @param {Object} input Component input
     */
    init:function(input){
        this.opt = input;
        this._draw();
    },

    /*
     * Function: _draw
     * Purpose:  Draw HPA summary feature
     * Returns:  -
     * Inputs:   -
     */
    _draw: function(){
        var self = this;
        self._componentPrefix = "hpaSummaryFeature_";

        /* Create a component container */
        self._componentDiv = jQuery('<div></div>');
        self._componentDiv.css('width',self.opt.width);

        /* Create table */
        self._leftColumn = jQuery('<td class="'+self._componentPrefix+'leftColumn"></td>');
        self._leftColumn.css({
            'width': self.opt.imageWidth,
            'vertical-align': 'top'
        });
        self._rightColumn = jQuery('<td class="'+self._componentPrefix+'rightColumn"></td>');
        self._rightColumn.css({
            'vertical-align': 'top'
        });
        self._mainRow = jQuery('<tr></tr>');
        self._mainRow.append(self._leftColumn);
        self._mainRow.append(self._rightColumn);
        self._table = jQuery('<table class="'+self._componentPrefix+'table"></table>');
        self._table.append(self._mainRow);
        self._table.css('width', '100%');

        /* Create container for left column */
        self._leftContainer = jQuery('<div class="'+self._componentPrefix+'leftContainer"></div>');

        /* Create image title */
        if (self.opt.imageTitle != "") {
            self._imageTitle = jQuery('<div class="'+self._componentPrefix+'imageTitle">'+self.opt.imageTitle+'</div>');
        }

        /* Create image */
        if (self.opt.imageUrl != "") {
            /* HPA image */
            self._image = jQuery('<img src="' + self.opt.imageUrl + '" class="' + self._componentPrefix + 'image" />');
            self._image.css({
                'width': '100%'
            });
            if(self.opt.imageTitle != ""){
                self._image.attr({
                    'alt': 'HPA image',
                    'title': self.opt.imageTitle
                });
            }
        }

        /* Create link icon */
        self._linkImage = jQuery('<div class="' + self._componentPrefix + 'linkImage" ></div>');

        /* Create link in left column including: image, link icon and image title  */
        if (self.opt.linkUrl != "") {
            self._link = jQuery('<a target="_blank" href="'+self.opt.linkUrl+'"></a>');
            if(self.opt.linkTitle != ""){
                self._link.attr({
                    'title': self.opt.linkTitle
                });
            }
            if (self.opt.imageUrl != "") {
                self._link.append(self._image);
            }
            self._link.append(self._linkImage);
            self._leftContainer.append(self._link);
            if (self.opt.imageTitle != "" && self.opt.imageUrl != "") {
                /* Include image legend in left column */
                self._leftContainer.append(self._imageTitle);
            }
        } else {
            /* Still print image if there is no link */
            self._leftContainer.append(self._image);
            if (self.opt.imageTitle != "" && self.opt.imageUrl != "") {
                /* Include image legend in left column */
                self._leftContainer.appenf(self._imageTitle);
            }
        }

        /* Create title in right column */
        self._contentTitle = jQuery('<div class="'+self._componentPrefix+'contentTitle">'+self.opt.title+'</div>');

        /* Create notes in right column */
        self._contentNotes = jQuery('<ul class="'+self._componentPrefix+'contentNotes"></ul>');
        jQuery.each(self.opt.notes, function(k, v) {
            self._contentNotes.append(jQuery('<li>' + v + '</li>'))
        });

        /* Put everything together */
        jQuery("#"+self.opt.target).append(self._componentDiv);
        self._componentDiv.append(self._table);
        self._leftColumn.append(self._leftContainer);
        self._rightColumn.append(self._contentTitle);
        self._rightColumn.append(self._contentNotes);
    }
//    /**
//     * Default values for the options
//     * @name Biojs.HpaSummaryFeature-opt
//     */
//    opt: {
//        target: '',
//        title: '',
//        imageUrl: '',
//        imageTitle: '',
//        notes: [],
//        linkUrl:'',
//        linkTitle:'',
//        width: '900px',
//        imageWidth: '200px'
//    }
    });

module.exports = hpaSummaryFeature;