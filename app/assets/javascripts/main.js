$(function(){
  $('h3, .left-title').on('mouseover', function(){
    $('h3, .left-title').css('color', '#333333');
  });

  $('h3, .left-title').on('mouseout', function(){
    $('h3, .left-title').css('color', '');
  });
  
  $('span').textillate({
    selector: 'span',	// 要素を指定
    loop: true,	// ループ繰り返し
    minDisplayTime: 2000,	// アニメーションの間隔時間
    initialDelay: 1000,	// アニメーション開始までの遅延時間
    autoStart: true,	// アニメーションの自動スタート
    inEffects: [],	// エフェクト開始時のアニメーション設定
    outEffects: [ 'rotateOut' ],	// エフェクト終了時のアニメーション設定
  
    in: {
      effect: 'bounceInRight',	// エフェクトの指定
      delayScale: 2,	// 遅延時間の指数
      delay: 50,	// 文字ごとの遅延時間
      sync: false,	// アニメーションをすべての文字に同時に適用
      shuffle: false, // 文字のランダム表示
      reverse: false,	// エフェクトを逆に再生（「sync:true」のときは不可）
      callback: function () {}	// コールバック関数
    },
  
    out: {
      effect: 'flip',  
      delayScale: 1.5,  
      delay: 50,  
      sync: false,  
      shuffle: false,
      reverse: false,
      callback: function () {},
      type: 'char'
    }
  });

  $('h3, .left-title').textillate({
    selector: 'h3, .left-title',	
    loop: true,	
    minDisplayTime: 3000,
    initialDelay: 1000,
    autoStart: true,
    inEffects: [],
    outEffects: [],	
  
    in: {
      effect: 'tada',
      delayScale: 1.5,
      delay: 50,
      sync: false,
      reverse: false,
      callback: function () {}
    },
  
    out: {
      effect: 'tada',  
      delayScale: 1.5,  
      delay: 50,  
      sync: false,  
      shuffle: false,
      reverse: false,
      callback: function () {},
      type: 'char'
    }
  });

  $('.slider').slick({
    autoplay:true,
    autoplaySpeed:1000,
    dots:true,
    slidesToShow:4,
    
  });
});
