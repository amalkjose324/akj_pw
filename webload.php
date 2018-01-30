<div>
    <object type="text/html" data="http://google.com" width="800px" height="600px" style="overflow:auto;border:5px ridge blue">
    </object>
 </div>
<div id="mydiv">
</div>
<script src="js/vendors/jquery-2.1.3.min.js"></script>
<script>
        $("#mydiv")
            .html('<object data="http://facebook.com"/>');
</script>
