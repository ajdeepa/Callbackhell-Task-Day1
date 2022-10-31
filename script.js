setTimeout(() => {
document.querySelector(".container").innerHTML=`<h1>10</h1>`;
    setTimeout(() => {
        document.querySelector(".container").innerHTML=`<h1>9</h1>`;
        setTimeout(() => {
            document.querySelector(".container").innerHTML=`<h1>8</h1>`;
            setTimeout(() => {
                document.querySelector(".container").innerHTML=`<h1>7</h1>`;
                setTimeout(() => {
                    document.querySelector(".container").innerHTML=`<h1>6</h1>`;
                    setTimeout(() => {
                        document.querySelector(".container").innerHTML=`<h1>5</h1>`;
                        setTimeout(() => {
                            document.querySelector(".container").innerHTML=`<h1>4</h1>`;
                            setTimeout(() => {
                                document.querySelector(".container").innerHTML=`<h1>3</h1>`;
                                setTimeout(() => {
                                    document.querySelector(".container").innerHTML=`<h1>2</h1>`;
                                    setTimeout(() => {
                                        document.querySelector(".container").innerHTML=`<h1>1</h1>`;
                                        setTimeout(() => {
                                            document.querySelector(".container").innerHTML=`<div class="card text-purple  mt-50" style="max-width: 19rem;">
                                            <div class="card-body"><h1>Happy Independence Day</h1></div>
                                          </div>`;
                                        }, 1000);//callback hell end
                                    }, 1000);//count 1
                                }, 1000);//count 2
                            }, 1000);//count 3
                        }, 1000);//count 4
                    }, 1000);//count 5
                }, 1000);//count 6
            }, 1000);//count 7
        }, 1000);//count 8
    }, 1000);//count 9
}, 2000);//count 10
