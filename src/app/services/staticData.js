define(function () {
    var assignedTaskEventType = [
            {
                name: '异常',
                value: 1
            },
            {
                name: '开始',
                value: 2
            },
            {
                name: '到达取货地',
                value: 3
            },
            {
                name: '到达取货地',
                value: 4
            },
            {
                name: '已取货',
                value: 5
            },
            {
                name: '出发至目的地',
                value: 6
            },
            {
                name: '到达目的地',
                value: 7
            }
        ],
        ongoingTaskEventType = [
            {
                name: '分派确认',
                value: 1
            },
            {
                name: '分派拒绝',
                value: 2
            }
        ];

    return{
        assignedTaskEventType: assignedTaskEventType,
        ongoingTaskEventType: ongoingTaskEventType

    };
})