window.addEventListener('DOMContentLoaded', function () {
    $('#main_top_text').addClass('on');
    $('#main_title').addClass('on');
    $('#section01 .mockup').addClass('on');
    // $('#section01 .illust').addClass('on');



    // /mousehover evert








    /* scroll event section */
    container.addListener((e) => {

        let scrollTop = container.scrollTop;
        $('.posNum').html(scrollTop)


        if (scrollTop >= 300) {
            $('#section01 .illust').addClass('on')
        }

        if (scrollTop >= 850) {
            $('#container02 .text_box').addClass('on')
        }

        if (scrollTop >= 1350) {
            $('#container03 .box').addClass('on')
        }

        if (scrollTop >= 2300) {
            $('#container04 .box, #container04 .illust').addClass('on')
        }


        if (scrollTop >= 3000) {
            $('#container05 .title, #container05 .title_line, #container05 .title01').addClass('on')
        }

        if (scrollTop >= 3300) {
            $('#container05 .illust').addClass('on')
        }

        if (scrollTop >= 3500) {
            $('#container05 .text, #container05 .line01, #container05 .line02, #container05 .line03').addClass('on')
        }

        if (scrollTop >= 4150) {
            $('#container05 .illust02').addClass('on')
        }

        if (scrollTop >= 4200) {
            $('#container06 .title').addClass('on')
        }

        if (scrollTop >= 4250) {
            $('#container06 .asis_tobe').addClass('on')
        }

        if (scrollTop >= 4300) {
            $('#container06 .text_box .line01').addClass('on')
        }
        if (scrollTop >= 4500) {
            $('#container06 .text_box .line02').addClass('on')
        }
        if (scrollTop >= 4700) {
            $('#container06 .text_box .line03').addClass('on')
        }
        if (scrollTop >= 4900) {
            $('#container06 .text_box .line04').addClass('on')
        }

        if (scrollTop >= 5300) {
            $('#container07 .title, #container07 .text').addClass('on')
        }

        if (scrollTop >= 5845) {
            $('#circle_box').addClass('on')
        }

        if (scrollTop >= 6800) {
            $('#typo_box .typo01, #typo_box .typo02').addClass('on')
        }

        if (scrollTop >= 7400) {
            $('#typo_box .typo03').addClass('on')
        }

        if (scrollTop >= 7500) {
            $('#container07 .illust').addClass('on')
        }

        if (scrollTop >= 8300) {
            $('#container08 .text_box').addClass('on')
        }

        if (scrollTop >= 8600) {
            $('#container08 .logo, #container08 .icon_box').addClass('on')
        }
        if (scrollTop >= 9300) {
            $('#container09 .text_box').addClass('on')
        }

        if (scrollTop >= 9500) {
            $('#container09 .illust_box').addClass('on')
        }
        if (scrollTop >= 10300) {
            $('#wireframe').addClass('on')
        }
        if (scrollTop >= 11300) {
            $('#container10 .text_box').addClass('on')
        }
        if (scrollTop >= 11800) {
            $('#container10 .img').addClass('on')
        }
        if (scrollTop >= 12700) {
            $('#container11 .con11_text_box').addClass('on')
        }
        if (scrollTop >= 12800) {
            $('#container11 .mockup').addClass('on')
        }

        if (scrollTop >= 13800) {
            $('#container12 .circle').addClass('on')
        }
        if (scrollTop >= 14500) {
            $('#container12 .step01').addClass('on')
        }
        if (scrollTop >= 14200) {
            $('#container12 .con12_text_box').addClass('on')
        }
        if (scrollTop >= 14655) {
            $('#container12 .con12_video_box').addClass('on')
        }
        if (scrollTop >= 14655) {
            $('#container12 .mock_up_bg').addClass('on')
        }

        if (scrollTop >= 14900) {
            $('#login_detail01').addClass('on')
        }
        if (scrollTop >= 15100) {
            $('#login_detail02').addClass('on')
        }
        if (scrollTop >= 15000) {
            $('#bg_img .circle').addClass('on')
        }

        if (scrollTop >= 15100) {
            $('#bg_img .illust').addClass('on')
        }
        if (scrollTop >= 15800) {
            $('#container13 .text_box').addClass('on')
        }
        if (scrollTop >= 16400) {
            $('#container13 .con13_video_box').addClass('on')
        }

        if (scrollTop >= 16300) {
            $('#mainhome_detail .detail01, #mainhome_line .line1').addClass('on')
        }

        if (scrollTop >= 16500) {
            $('#mainhome_detail .detail02, #mainhome_line .line2').addClass('on')
        }

        if (scrollTop >= 17100) {
            $('#mainhome_slide_box, #mainhome_detail .detail03_text, #mainhome_line .line3').addClass('on')
        }

        if (scrollTop >= 17300) {
            $('#mainhome_detail .detail04, #mainhome_line .line4').addClass('on')
        }

        if (scrollTop >= 17800) {
            $('#mainhome_detail .detail05, #mainhome_line .line5').addClass('on')
        }

        if (scrollTop >= 17424) {
            $('#mainhome_detail .detail06, #mainhome_line .line6').addClass('on')
        }

        if (scrollTop >= 17500) {
            $('#container13 .down_img').addClass('on')
        }

        if (scrollTop >= 18500) {
            $('#mainhome_bg_img').addClass('on')
        }

        if (scrollTop >= 19200) {
            $('#container14 .con14_text_box, #container14 .mockup').addClass('on')
        }

        if (scrollTop >= 20400) {
            $('#container14 .sub_text, #navi').addClass('on')
        }

        if (scrollTop >= 20900) {
            $('#container14 .sub_navi').addClass('on')
        }

        if (scrollTop >= 21500) {
            $('#container15 .con15_text_box').addClass('on')
        }

        if (scrollTop >= 22000) {
            $('#container15 .bg_circle, #container15 .con15_video_box').addClass('on')
        }

        if (scrollTop >= 23000) {
            $('#container15 .img_main').addClass('on')
        }

        if (scrollTop >= 23000) {
            $('#container15 .img_sub').addClass('on')
        }

        if (scrollTop >= 24000) {
            $('#container16 .con16_text_box, #container16 .missing_line, #container16 .illust').addClass('on')
        }

        if (scrollTop >= 24600) {
            $('#container16 .con16_video_box, #container16 .missing_line').addClass('on')
        }

        if (scrollTop >= 25000) {
            $('#missing_sub_img').addClass('on')
        }

        if (scrollTop >= 25300) {
            $('#missing_sub_text').addClass('on')
        }


        if (scrollTop >= 25800) {
            $('#container17 .con17_text_box').addClass('on')
        }

        if (scrollTop >= 26300) {
            $('#container17 .con17_video_box').addClass('on')
        }

        if (scrollTop >= 26500) {
            $('#story_text_box02, #story_text_point ').addClass('on')
        }

        if (scrollTop >= 26700) {
            $('#container17 .illust, #container17 .illust_bubble ').addClass('on')
        }

        if (scrollTop >= 27000) {
            $('#story_detail01, #story_detail02, #story_detail03').addClass('on')
        }

        if (scrollTop >= 29000) {
            $('#container18 .con18_text_box').addClass('on')
        }

        if (scrollTop >= 29000) {
            $('#container18 .bg_img, #container18 .mockup .info_front, #container18 .mockup .info_back, #container18 .info_illust').addClass('on')
        }

        if (scrollTop >= 30400) {
            $('#container18 .circle01, #container18 .circle02').addClass('on')
        }


        if (scrollTop >= 30500) {
            $('#container19 .con19_text_box').addClass('on')
        }

        if (scrollTop >= 31000) {
            $('#container19 .main_img19, #info_detail_box').addClass('on')
        }

        if (scrollTop >= 32000) {
            $('#container20 .con20_text_box').addClass('on')
        }

        if (scrollTop >= 32800) {
            $('#container20 .main_img20').addClass('on')
        }

        if (scrollTop >= 33500) {
            $('#container20 .down_mockup').addClass('on')
        }

        if (scrollTop >= 32900) {
            $('#hospital_detail_box .detail01').addClass('on')
        }

        if (scrollTop >= 33100) {
            $('#hospital_detail_box .detail02').addClass('on')
        }

        if (scrollTop >= 33400) {
            $('#hospital_detail_box .detail03').addClass('on')
        }

        if (scrollTop >= 33500) {
            $('#container20 .main_img').addClass('on')
        }

        if (scrollTop >= 34400) {
            $('#container20 .down_mockup').addClass('on')
        }
        if (scrollTop >= 33660) {
            $('#hospital_detail_box .detail04').addClass('on')
        }

        if (scrollTop >= 34100) {
            $('#mypage_detail_box, #mypage_pow .pow01').addClass('on')
        }

        if (scrollTop >= 34300) {
            $('#container21 .con21_text_box, #mypage_pow .pow01').addClass('on')
        }

        if (scrollTop >= 34780) {
            $('#mypage_mockup').addClass('on')
        }

        if (scrollTop >= 35200) {
            $('#mypage_detail_box .detail01, #mypage_detail_box .my_work_box').addClass('on')
        }

        if (scrollTop >= 35300) {
            $('#mypage_detail_box .detail02').addClass('on')
        }

        if (scrollTop >= 35500) {
            $('#mypage_detail_box .detail03').addClass('on')
        }

        if (scrollTop >= 36000) {
            $('#mypage_detail_box .detail04').addClass('on')
        }

        if (scrollTop >= 36200) {
            $('#mypage_pow .pow02').addClass('on')
        }

        if (scrollTop >= 36800) {
            $('#container22 .con22_text_box, #pet_sub, #container22 .con22_video_box').addClass('on')
        }

        if (scrollTop >= 37580) {
            $('#animal_bg_illust').addClass('on')
        }

        if (scrollTop >= 37900) {
            $('#section06 .bg_img').addClass('on')
        }

        if (scrollTop >= 38800) {
            $('#section06 .text_box').addClass('on')
        }

        if (scrollTop >= 39300) {
            $('#bottom').addClass('on')
        }
































    });



    /*  slide,click event section */



})


