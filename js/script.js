// event pada saat link di klik
$('.page-scroll').on('click', function(e){

	// // ambil isi href
	var tujuan = $(this).attr('href');

	// // tangkap elemen ybs
	var elementujuan = $(tujuan);

	// pindahkan scroll
	$('body').animate({
		scrollTop: elementujuan.offset().top
	});

	e.preventDefault();
});