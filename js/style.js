$(function(){
    let target1 = $("#parallax-01"),//target1という変数に#parallax-01を代入するという変数宣言
        targetPosOT1 = target1.offset().top,//target1のY座標を取得
        target2 = $("#parallax-02"),//target2という変数に#parallax-02を代入するという変数宣言
        targetPosOT2 = target2.offset().top,//target2のY座標を取得
        targetFactor = 0.5,//targetFactorという変数に0.5を代入
        windowH = $(window).height(),//window（使用している端末で表示される画面の高さ）
        scrollYStart1 = targetPosOT1 - windowH,//背面遅延1のY座標-画面の高さ
        scrollYStart2 = targetPosOT2 - windowH;//背面遅延2のY座標-画面の高さ

  $(window).on('scroll',function(){
    let scrollY = $(this).scrollTop();//[仮説]scrollする度のscrolltopのX座標

    if(scrollY > scrollYStart1){
      //"="になる時はscrollbottomと背面遅延1のY座標が同じ時、1pxスクロールすれば背面遅延が画面内に入る
      target1.css('background-position-y', (scrollY - targetPosOT1) * targetFactor + 'px');
      //target1にbgp-yとして（scrollTop-背面遅延1のoffset時のY座標）* 0.5 pxをつける
      //target1にbgp-yとして（scrollTop-背面遅延1のoffset時のY座標）のみをつけると画像が動いていないように見え、次の要素が上から覆いかぶさるように見える

    }else{
      //そうでない時は
      target1.css('background-position','center top');
      //target1のpositionを通常に戻す

    }if(scrollY > scrollYStart2){
      target2.css('background-position-y', (scrollY - targetPosOT2) * targetFactor + 'px');

    }else{
      target2.css('background-position','center top');
    }
  });
});









//
// $(function(){
//   let $target1 = $("#parallax-01");//$target1という変数に#parallax-01を代入するという変数宣言
//       $targetPosOT1 = $target1.offset().top;//$target1のY座標を取得
//       $target2 = $("#parallax-02");//$target2という変数に#parallax-02を代入するという変数宣言
//       $targetPosOT2 = $target2.offset().top;//$target2のY座標を取得
//       $targetFactor = 0.5;//$targetFactorという変数に0.5を代入
//       $windowH = $(window).height();//window（使用している端末で表示される画面の高さ）
//       $scrollYStart1 = $targetPosOT1 - $windowH;//背面遅延1のY座標-画面の高さ（）
//       $scrollYStart2 = $targetPosOT2 - $windowH;//背面遅延2のY座標-画面の高さ
//
//   $(window).on('scroll',function(){
//     let $scrollY = $(this).scrollTop();//
//
//
//
//     //
//     if($scrollY > $scrollYStart1){
//       $target1.css('background-position-y', ($scrollY - $targetPosOT1) * $targetFactor + 'px');
//     //
//     }else{
//       $target1.css('background-position','center top');
//     //
//     }if(scrollY > scrollYStart2){
//       $target2.css('background-position-y', ($scrollY - $targetPosOT2) * $targetFactor + 'px');
//     //
//     }else{
//       $target2.css('background-position','center top');
//     }
//   });
// });
