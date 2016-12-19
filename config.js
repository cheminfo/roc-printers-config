module.exports = {
    defaultEntry: function() {
        return {};
    },
    customDesign: {
        version: 1,
        views: {
            printerByMacAddress: {
                map: function (doc) {
                    if(doc.$type !== 'entry') return;
                    if(doc.$kind !== 'printServer') return;
                    emit(doc.$content.macAddress);
                }
            }
        }
    }
};
