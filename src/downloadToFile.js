export default function downloadfile2(filename, text = "egy meg egy\r\nkettő\nhárom"){
//        alert ("33");
        console.log("downloadfile2 function started");
        let aElement = document.createElement("a");
        let blob = new Blob(["\ufeff",text], { type: "text/plain;charset=ISO-8859-2" });
        aElement.setAttribute('href', window.URL.createObjectURL(blob));
        aElement.setAttribute('download', filename);

        if (document.createEvent) {
          var event = document.createEvent('MouseEvents');
          event.initEvent('click', true, true);
          aElement.dispatchEvent(event);
        } else {
        aElement.click();
        }
        
      }