var func = function()
{
	// input
	$('input:text, textarea').each(function(){
		var txtval = $(this).val();
		$(this).focus(function(){
			$(this).css({'color':'#8f50b9', 'font-style':'normal', 'font-size':'20px', 'font-family':'Arial'});
				if($(this).val() == txtval){
						$(this).val('')
				}
		});
		$(this).blur(function(){
				$(this).css({'color':'#8f50b9'});
				if($(this).val() == ""){
						$(this).val(txtval).css({'color':'#8a858e', 'font-style':'italic', 'font-size':'14px', 'font-family':'Georgia'});
				}
		});
	});
	
	
	$('.order-link').click(function(e){
			$('.overlay').fadeIn('fast',function(){
					$('#order1').animate({'top':'160px'},500);
			});
			e.preventDefault();
	});
				
	$('.order-link2').click(function(e){
			$('.overlay').fadeIn('fast',function(){
					$('#order2').animate({'top':'160px'},500);
			});
			e.preventDefault();
	});
	
	$('.order-link3').click(function(e){
			$('.overlay').fadeIn('fast',function(){
				$('#order2').animate({'top':'800px'},500);
			});
			e.preventDefault();
	});
	
	$('.order-link4').click(function(e){
			$('.overlay').fadeIn('fast',function(){
				$('#order2').animate({'top':'4700px'},500);
			});
			e.preventDefault();
	});
	
	$('.call-link2').click(function(e){
			$('.overlay').fadeIn('fast',function(){
					$('#order3').animate({'top':'4700px'},500);
			});
			e.preventDefault();
	});
	
	$('.call-link').click(function(e){
			$('.overlay').fadeIn('fast',function(){
					$('#order3').animate({'top':'160px'},500);
			});
			e.preventDefault();	
	});
	
	$('.overlay, .close-popup').click(function(e){
			$('#order1, #order2, #order3').animate({'top':'-2000px'},50,function(){
					$('.overlay').fadeOut('fast');
			});
			e.preventDefault();	
	});
		
		// Slider 2								
		$('#foo3').carouFredSel({
			responsive: true, 
			auto: false,
			width: '100%',
			scroll: 1,
			prev: '#prev2',
			next: '#next2',
			items: {
				width: '300px',
				height: '483px',	
				visible: {
					min: 3,
					max: 5
				}
			}
		});
		
		$('.items-inner').hover(
		function() {
			$(this).find('.drop').slideDown(servicesSpeed);
			},
		function() {
			$(this).find('.drop').slideUp(servicesSpeed, function() {
						$(this).css({'z-index': 1});
					});
			}
		);
		
	
	// DK popup
	
	var servicesSpeed  = 200;
	
	$('.dk-title').hover(
	function() {
		$(this).parents('div').css({'z-index': 2}).addClass('act');
		$(this).find('.dk-popup').slideDown(servicesSpeed);
		},
	function() {
		$(this).parents('div').css({'z-index': 1}).removeClass('act');
		$(this).find('.dk-popup').slideUp(servicesSpeed, function() {
					$(this).css({'z-index': 1});
				});
		}
	);
	
	// carousel
	$('#carousel1').jcarousel({scroll: 1, wrap: 'circular'});
	$('#carousel2').jcarousel({scroll: 1, wrap: 'circular'});
	
	
			
			

	var styles=[
	
	];
  
	var styledMap = new google.maps.StyledMapType(styles, {name: "Styled Map"});      		
    var center_point = new google.maps.LatLng(55.756588,37.619731);
    var mapOptions = {
		center: center_point,
    	zoom: 12,
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		navigationControl: false,
		streetViewControl: false,	
	    mapTypeControl: false,
	    scaleControl: false,
	    scrollwheel: false    
    }
       
    map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions);  
	map.mapTypes.set('map_style', styledMap);
	map.setMapTypeId('map_style');
	
	var myLatlng = new google.maps.LatLng(55.775358,37.594904);
	var image = new google.maps.MarkerImage(
		'/template/images/marker.png',
		new google.maps.Size(48,62),
		new google.maps.Point(0,0),
		new google.maps.Point(24,62)
	);	
	
	var marker = new google.maps.Marker({
	    position: myLatlng,
	    map: map,
	    clickable: false,	    
	    title: 'Charmer',
	    icon: image
	});  
	
	places = [
		{
			'title':'Парк «Горки»',
			'stitle':'Парк «Горки»',
			'desc':'Всего 14 км от МКАД по Рублево-Успенскому шоссе в поселке Горки-2.',
			'text-1':'Банкет 150 гостей',
			'text-2':'Фуршет 300 гостей',
			'x':'37.170502',
			'y':'55.722291',
			'icon' : 'http://test.renart.ru/projects/diamond/layout2/files/map_coworking_s.png'
		},
		{
			'title':'Зал Торжеств в усадьбе Кузьминки',
			'stitle':'Зал Торжеств',
			'desc':'Зал расположен на территории уникального памятника культурного наследия — Усадьбы Князей Голицыных в Кузьминках.',
			'text-1':'Банкет 80 гостей',
			'text-2':'Фуршет 200 гостей',
			'x':'37.795693',
			'y':'55.689704',
			'icon' : 'http://test.renart.ru/projects/diamond/layout2/files/map_zal_s.png'},
		{
			'title':'Юсуповский Дворец',
			'stitle':'Юсуповский Дворец',
			'desc':'Памятник архитектуры «Палаты Волковых — Юсуповых».',
			'text-1':'Банкет 120 гостей',
			'text-2':'Фуршет 300 гостей',
			'x':'37.649409',
			'y':'55.766181',
			'icon' : 'http://test.renart.ru/projects/diamond/layout2/files/map_usup_s.png'},
		{
			'title':'Золотой лев',
			'stitle':'Золотой лев',
			'desc':'5 гектар ухоженной территории с великолепным банкетным залом и красивой территорией.',
			'text-1':'Банкет 100 гостей',
			'text-2':'Фуршет 200 гостей',
			'x':'38.424882',
			'y':'55.216538',
			'icon' : 'http://test.renart.ru/projects/diamond/layout2/files/map_lev_s.png'},
		{
			'title':'Коворкинг «Рабочая станция»',
			'stitle':'Коворкинг',
			'desc':'Коворкинг — это пространство для творческого процесса в центре мегаполиса.',
			'text-1':'Банкет 120 гостей',
			'text-2':'Фуршет 400 гостей',
			'x':'37.583682',
			'y':'55.710593',
			'icon' : 'http://test.renart.ru/projects/diamond/layout2/files/map_coworking_s.png'},
	];
	
	$('.map-box .tabs').append('<li><a href="#">Все прощадки</a></li>')
	for (var i = 0; i < places.length; i++) {
		tmm = '';
		var image = new google.maps.MarkerImage(
			places[i].icon,
			// This marker is 20 pixels wide by 32 pixels tall.
			new google.maps.Size(210,66),
			// The origin for this image is 0,0.
			new google.maps.Point(0,0),
			// The anchor for this image is the base of the flagpole at 0,32.
			new google.maps.Point(105,60)
		);
	  
		var myLatLng = new google.maps.LatLng(places[i].y, places[i].x);
		var marker = new google.maps.Marker({
			position: myLatLng,
			map: map,
			icon: image,
			title: places[i].title,
		});
		
		var contentString = 
		"<div class='mbox1' style='top:120px;left:200px'><em>&nbsp;</em>"+
		"	<img src='images/map_img01.jpg' width='215' height='130' alt='#' />"+
		"	<div class='name'>Юсуповский дворец</div>"+
		"	<div class='txt'>Первоначально под кейтерингом подразумевали человека или предприятие.</div>"+
		"	<div class='more'><a href='#'>Узнать больше</a></div>"+
		"	<div class='tools'>"+
		"		<div class='tl'><b>2200 <span>м<sup>2</span></sup></b>площадь</div>"+
		"		<div class='tr'><b>700 <span>чел</span></b> вместимость</div>"+
		"	</div>"+
		"</div>";

		var infowindow = new google.maps.InfoWindow({
			content: contentString
		});

		google.maps.event.addListener(marker, 'click', function() {

			infowindow.open(map,marker);
		});
		
		places[i].marker = marker;
		$('.map-box .tabs').append(
			$('<li>').append(
				$('<a>').attr('href','#').html(places[i].stitle)
			)
		)
	}
	$('.map-box .tabs li').eq(0).addClass('current');
	$.each($('.map-box .tabs li a'), function(i, item){
		$(item).bind('click', function(e){
			e.preventDefault();
			if( i == 0){
				var center_point = new google.maps.LatLng(55.756588,37.619731);
				map.panTo(center_point);
			} else {
				$('.map-box .tabs li').removeClass('current');
				$(item).parent().addClass('current');
				map.panTo(places[i-1].marker.getPosition());
			}
		})
	});
};

$(func);

$(function(){
	$(".plus").click(function(){
		var zoom = map.getZoom();
		map.setZoom(zoom+1);
		return false;
	});
	$(".minus").click(function(){
		var zoom = map.getZoom();
		map.setZoom(zoom-1);
		return false;
	});
	
});

