$(function() {

    //Wait for Pinegrow to wake-up
    $("body").one("pinegrow-ready", function(e, pinegrow) {

        //Create new Pinegrow framework object
        var f = new PgFramework("UserLib", "UserLib");

        //This will prevent activating multiple versions of this framework being loaded
        f.type = "UserLib";
        f.allow_single_type = true;
        f.user_lib = true

        var comp_comp1 = new PgComponentType('comp1', 'Roadmap');
        comp_comp1.code = '<div class="timeline-container" data-pg-collapsed>\
    <div class="timeline-block">\
        <div class="iconic">\
            <i class="fa fa-graduation-cap"></i>\
        </div>\
        <div class="text">\
            <header class="heading">\
                <h4 class="title">Academic values</h4>\
            </header>\
            <p>\
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis atque temporibus fugit voluptatibus\
                sit saepe</p>\
        </div>\
    </div>\
    <div class="timeline-block">\
        <div class="iconic">\
            <i class="fa fa-barcode"></i>\
        </div>\
        <div class="text">\
            <header class="heading">\
                <h4 class="title">Couching with values</h4>\
            </header>\
            <p>\
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis atque temporibus fugit voluptatibus\
                sit saepe</p>\
        </div>\
    </div>\
    <div class="timeline-block">\
        <div class="iconic">\
            <i class="fa fa-id-card"></i>\
        </div>\
        <div class="text">\
            <header class="heading">\
                <h4 class="title">Online learning</h4>\
            </header>\
            <p>\
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis atque temporibus fugit voluptatibus\
                sit saepe</p>\
        </div>\
    </div>\
    <div class="timeline-block">\
        <div class="iconic">\
            <i class="fa fa-book"></i>\
        </div>\
        <div class="text">\
            <header class="heading">\
                <h4 class="title">Structured lesson</h4>\
            </header>\
            <p>\
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis atque temporibus fugit voluptatibus\
                sit saepe</p>\
        </div>\
    </div>\
</div>';
        comp_comp1.parent_selector = null;
        f.addComponentType(comp_comp1);
        
        //Tell Pinegrow about the framework
        pinegrow.addFramework(f);
            
        var section = new PgFrameworkLibSection("UserLib_lib", "Components");
        //Pass components in array
        section.setComponentTypes([comp_comp1]);

        f.addLibSection(section);
   });
});