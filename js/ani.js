'use stirct'
const gallery = $('.gallery')
const galleryul = $('.gallery ul')
const galleryulli = $('.gallery ul li')
const item=$('.items');
const itemul=$('.items ul');
const itemulli=$('.items ul li');

const arrbg = []
for (let i = 0; i < galleryulli.length; i++) {
    arrbg.push(`url(img/bg${i}.jpg)no-repeat 50%/cover`)
    galleryulli.eq(i).css('background', arrbg[i])

}

let i = -1

function autogallery() {
    if (i >= galleryulli.length - 1) {
        i = -1
    }
    i++
    console.log(`i=>>${i}`);
    autofn()
    if (i >= galleryulli.length - 1) {
        i = -1
    }
    
};

let setin = setInterval(autogallery, 3000);
(() => {
    autogallery();
})()
const spanArrow = $('span.arrow')

spanArrow.hover(
    function () {
        clearInterval(setin)
        // console.log($(this).index());
    },
    function () {
        setin = setInterval(autogallery, 3000);
    }
    );
    itemulli.hover(
        function(){
            clearInterval(setin)
            // console.log($(this).index());
    },function(){
        setin = setInterval(autogallery, 3000);
    }
);
spanArrow.on('click',function(){
    const _this_idx = $(this).index();
    
    if (_this_idx==0) {
        if(i<=0) i=galleryulli.length
        i--
        autofn()
    }
    if (_this_idx==1) {
        if (i >= galleryulli.length - 1) {
            i = -1
        }
        i++
        autofn()
    }
})
itemulli.on('click',function(){
    const _this_idx = $(this).index();
    console.log(_this_idx);
    i=_this_idx
    autofn()
    // const gap = galleryulli.eq(1).offset().left - galleryulli.eq(0).offset().left
    // const goto = (-i * gap) + 'px'
    // gallery.animate({
    //     left: goto
    // })
    // itemulli.eq(i).addClass('on').siblings().removeClass('on')
})

function autofn(){
   
    const gap = galleryulli.eq(1).offset().left - galleryulli.eq(0).offset().left
    const goto = (-i * gap) + 'px'
    gallery.animate({
        left: goto
    })
    itemulli.eq(i).addClass('on').siblings().removeClass('on')
}
// https://github.com/YukSeoungHo/jq_autogall.git