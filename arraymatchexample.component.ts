var filterString='/(a|b)/';
    let reg: RegExp = /a|b/;

    var ages = [{label:"where",name:"abc"},{label:"xyz",name:"abc"}, {label:"abc",name:"abc"},{label:"bcd",name:"abc"}];
    filter1('w');    

    function filter1(letter) {
        var results = [];
        var len = ages.length;
        for (var i = 0; i < len; i++) {
          if(ages[i].label.match(reg))
          results.push(ages[i]);
        }
        console.log("After Filter",results);
        console.log(results);       
      }
      
      
      
      -----------Output-----------------------------------------------
      
      After Filter
      0: {label: "abc", name: "abc"}
      1: {label: "bcd", name: "abc"}
      
