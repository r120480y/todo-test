var kanban = new jKanban({
    element: '#kt_docs_jkanban_basic',
    gutter: '0',
    widthBoard: '250px',
    boards: []
});


let myTask = function () {
    this.desk = {};
    this.addDesk = function (name) {
        this.desk[name] = {
            'id': '_inprocess',
            'title': 'In Process',
            'item': [{
                'title': '<span class="font-weight-bold">You can drag me too</span>'
            },
                {
                    'title': '<span class="font-weight-bold">Buy Milk</span>'
                }
            ]
        }
        var kanban = new jKanban({
            element: '#kt_docs_jkanban_basic',
            gutter: '0',
            widthBoard: '250px',
            boards: [{
                'id': '_inprocess',
                'title': 'In Process',
                'item': [{
                    'title': '<span class="font-weight-bold">You can drag me too</span>'
                },
                    {
                        'title': '<span class="font-weight-bold">Buy Milk</span>'
                    }
                ]
            }
              kanban.addBoards(
                  [{
                      'id' : '_default',
                      'title'  : 'Kanban Default',
                      'item'  : [
                          {
                              'title':'Default Item',
                          },
                          {
                              'title':'Default Item 2',
                          },
                          {
                              'title':'Default Item 3',
                          }
                      ]
                  }]
              )
        });

        let k = new myTask()
        k.addDesk(name 'Desk1');
        k.addDesk(name 'Desk2');
        k.addDesk(name 'Desk3');
        k.addDesk(name 'Desk4');
        k.addDesk(name 'Desk5');