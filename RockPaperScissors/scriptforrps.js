   var tegen = 0;
    var jij = 0;
    var select;
    var oppo = Math.floor(Math.random() * 3) + 1 ;
    $(document).ready(function(){
        $("#alles").hide();
        $("#naaminv").hide();
        $("#alles2").hide();
        $("#naaminv2").hide();
        // $("#div3").hide();
    $("#rock").click(function(){
        var oppo = Math.floor(Math.random() * 3) + 1 
        select=1
        if(oppo == 1){
            document.getElementById("cpucho").src = "rock.png";


        }
        
        if(oppo == 2){
            document.getElementById("cpucho").src = "paper.png";


        }
        if(oppo == 3){
            document.getElementById("cpucho").src = "scissors.png";


        }
        
       
    });
    $("#paper").click(function(){
        var oppo = Math.floor(Math.random() * 3) + 1 
      select = 2
      if(oppo == 1){
            document.getElementById("cpucho").src = "rock.png";


        }
        
        if(oppo == 2){
            document.getElementById("cpucho").src = "paper.png";


        }
        if(oppo == 3){
            document.getElementById("cpucho").src = "scissors.png";


        }
       
    });
    $("#scissor").click(function(){
        var oppo = Math.floor(Math.random() * 3) + 1 
        select = 3
        if(oppo == 1){
            document.getElementById("cpucho").src = "rock.png";


        }
        
        if(oppo == 2){
            document.getElementById("cpucho").src = "paper.png";


        }
        if(oppo == 3){
            document.getElementById("cpucho").src = "scissors.png";


        }
       
    });
    $("#butt3").click(function(){
        // ("#alles").show();
        // ("#naaminv").show();
        select = 0;
        oppo= 0;
    });
    
    $("#butt2").click(function(){
        var naam = document.getElementById("inp1").value;
        document.getElementById("jij").innerHTML = naam;
        select = 0;
        oppo= 0;
        
        
        $("#alles2").hide();
        $("#naaminv2").hide();
    });
    $("#butt").click(function(){
    if(oppo == 3 && select ==3){
        // $("#alles").show();
        // $("#naaminv").show();
        // document.getElementById()
        document.getElementById("sjij").innerHTML = jij;
        document.getElementById("scpu").innerHTML = tegen;
        
    }
    if(oppo == 3 && select ==2){
        alert("tegenstander heeft schaar, jij verliest!")
        var tegen = tegen +1
        document.getElementById("sjij").innerHTML = jij;
        document.getElementById("scpu").innerHTML = tegen;
        
    }
    if(oppo == 3 && select ==1){
        alert("tegenstander heeft schaar, jij wint!")
        var jij = jij +1
        document.getElementById("sjij").innerHTML = jij;
        document.getElementById("scpu").innerHTML = tegen;
        
    }
    if(oppo == 1 && select ==3){
        alert("tegenstander heeft steen, jij verliest!")
        var tegen = tegen +1
        document.getElementById("sjij").innerHTML = jij;
        document.getElementById("scpu").innerHTML = tegen;
        
    }
    if(oppo == 1 && select ==2){
        alert("tegenstander heeft steen, jij wint!")
        var jij = jij +1
        document.getElementById("sjij").innerHTML = jij;
        document.getElementById("scpu").innerHTML = tegen;
        
    }
    if(oppo == 1 && select ==1){
        alert("tegenstander heeft steen, gelijkspel!")
        document.getElementById("sjij").innerHTML = jij;
        document.getElementById("scpu").innerHTML = tegen;
        
        
    }
    if(oppo == 2 && select ==3){
        alert("tegenstander heeft papier, jij wint!")
        var jij = jij +1
        document.getElementById("sjij").innerHTML = jij;
        document.getElementById("scpu").innerHTML = tegen;
        select = 0;
        oppo= 0;
    }
    if(oppo == 2 && select ==2){
        alert("tegenstander heeft papier gelijkspel!!")
        document.getElementById("sjij").innerHTML = jij;
        document.getElementById("scpu").innerHTML = tegen;
        
    }
    if(oppo == 2 && select ==1){
        
        alert("tegenstander heeft papier, jij verliest!")
        var tegen = tegen +1
        document.getElementById("sjij").innerHTML = jij;
        document.getElementById("scpu").innerHTML = tegen;
        
    }
    });
    
});  