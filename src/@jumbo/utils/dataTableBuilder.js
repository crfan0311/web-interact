const dataTableBuilder = function () {
    this.bulkActions = [];
    this.columns = [];
    this.multiSelectOptions = [];
    this.itemActions = [];

    this.addBulkAction = function(icon, onAction, tooltip) {
        this.bulkActions.push({
            icon: icon,
            onAction: onAction,
            tooltip: tooltip,
        });
    };

    this.addColumn = function(id, label, render, props) {
        const column = {
            id: id,
            label: label,
        };

        if(props) {
            column.props = props;
        }
        else {
            column.props = {};
        }

        if (typeof render === "string") {
            column.dataMapKey = render;
        } else {
            column.render = render
        }
        this.columns.push(column);
    };

    this.addItemAction = function(icon, onAction, tooltip) {
        this.itemActions.push({
            icon: icon,
            onAction: onAction,
            tooltip: tooltip,
        });
    };

    this.addMultiSelectOptions = function(label, selectionLogic) {
        this.multiSelectOptions.push({
            label: label,
            selectionLogic: selectionLogic,
        });
    }
};

export {dataTableBuilder};