$(function(){

    //----------------------------------------------
    //ローディング画面
    //----------------------------------------------
    var loading=$('#loading');
    
    //ページが読み込まれたらアニメーションを非表示、MVの高さを調整する
    $(document).ready(function(){
        var windowHeight=$(window).height();
        $('.mv').height(windowHeight);
        loading.css('display','block');
        loading.delay('2000').fadeOut('2000');
    });

    //ページが読み込みが完了しない場合、3秒後にアニメーションを非表示にする
    setTimeout(function(){
        loading.fadeOut('3000');
    },8000);

    //画面リサイズ時にMVの高さを調整
    $(window).resize(function(){
        var windowHeight=$(window).height();
        $('.mv').height(windowHeight);
    });

    //----------------------------------------------
    //ページ内リンクへのスクロール
    //----------------------------------------------
    $('.page-link').click(function(){
        var id=$(this).attr('href');
        var position=$(id).offset().top;
        $('html,body').animate({
            scrollTop:position
        },400)
        return false;
    });

    //----------------------------------------------
    //オーディオ再生と停止
    //----------------------------------------------
    var audio=$('#audio').get(0);     //#audioの一番最初の要素を取得(埋め込みオーディオ要素)
    var isPlaying=false;              //再生か停止かの状態を表す。初期値falseは停止を意味する
    audio.volume=0.5;                 //音量を50％で指定(最小0.0～最大1.0)

    $('#soundToggle').click(function(){
        if(isPlaying){      //isPlaying=true(再生中)の時
            audio.pause();  //一時停止
            $('.audio-text').removeClass('on');
            $('.soundToggle-text').html('SOUND OFF');
        }else{              //isPlaying=false(一時停止中)の時
            audio.play();   //再生
            $('.audio-text').addClass('on');
            $('.soundToggle-text').html('SOUND ON');
        }
    });
    //メディアが再生中か停止中かでisPlayingの値を更新する
    //再生中はtrue,一時停止中はfalse
    audio.onplaying=function(){ 
        isPlaying=true;
    };
    audio.onpause=function(){
        isPlaying=false;
    };

    //----------------------------------------------
    //SP用フッターボタンの表示切替
    //----------------------------------------------
    if (window.matchMedia("(max-width: 767px)").matches) {
        $spBtn = $(".sp-btn");
        $spBtn.hide();
        $(window).scroll(function () {
          if ($(this).scrollTop() > 1000) {
            $spBtn.fadeIn();
          } else {
            $spBtn.fadeOut();
          }
        });
    }

});
