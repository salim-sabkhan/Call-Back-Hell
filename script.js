setTimeout(() => {
    document.getElementById('counter').innerHTML = 10;
    return setTimeout(() => {
        document.getElementById('counter').innerHTML = 9;
        return setTimeout(() => {
            document.getElementById('counter').innerHTML = 8;
            return setTimeout(() => {
                document.getElementById('counter').innerHTML = 7;
                return setTimeout(() => {
                    document.getElementById('counter').innerHTML = 6;
                    return setTimeout(() => {
                        document.getElementById('counter').innerHTML = 5;
                        return setTimeout(() => {
                            document.getElementById('counter').innerHTML = 4;
                            return setTimeout(() => {
                                document.getElementById('counter').innerHTML = 3;
                                return setTimeout(() => {
                                    document.getElementById('counter').innerHTML = 2;
                                    return setTimeout(() => {
                                        document.getElementById('counter').innerHTML = 1;
                                        return setTimeout(() => {
                                            document.getElementById('counter').innerHTML = "<b>HAPPY INDEPENDENCE DAY</b>";
                                        }, 1000);
                                    }, 1000);
                                }, 1000);
                            }, 1000);
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);