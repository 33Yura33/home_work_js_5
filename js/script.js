	var images_names = [
			'nature_1.jpg',
			'nature_2.jpg',
			'nature_3.jpg',
			'nature_4.jpg',
			'nature_5.jpg'
		];

		var image_block_tpl = "<div class='images-list-item'><img src=':path_to_image'/></div>";

		$(document).ready(function(){

			images_names.forEach(function(item, i){
				var img_block = image_block_tpl.replace(':path_to_image', "images/" + item);

				$(".images-list").append(img_block);
			});

			$('input[name="strlen"]').click(function(){
				var str = $('input[name="str"]').val();

				alert("Длина строки: " + str.length);

				return false;
			});

			$('input[name="without_http_s_btn"]').click(function(){
				var link = $('input[name="without_http_s"]').val();
				var re = /(https?:\/\/)/g;
				var ready_link = link.replace(re, '');

				alert("Имя домена: " + ready_link);

				return false;
			});

			$('input[name="without_http_s_www_btn"]').click(function(){
				var link = $('input[name="without_http_s_www"]').val();
				var re = /(https?:\/\/w?w?w?.?)/g;
				var ready_link = link.replace(re, '');

				alert("Имя домена: " + ready_link);

				return false;
			});

			$(".frm").submit(function(){
				var name = $('input[name="name"]').val(),
					surname = $('input[name="surname"]').val(),
					email = $('input[name="email"]').val(),
					password = $('input[name="password"]').val();

				name = name.replace(/(\s)+/g, '');
				surname = surname.replace(/(\s)+/g, '');
				password = password.replace(/(\s)+/g, '');


				console.log("Password length: " + password.length);
				console.log("Email validation: " + validate_email(email));

				if(password.length < 5 || !validate_email(email))
					alert("Поля заполнены ошибочно");
				else
					alert("Имя: " + name + "\nФамилия: " + surname + "\nПароль: " + password + "\nE-mail: " + email);


				return false;

			});

			$("input[name='get_char_code']").click(function(){

				var char = $("input[name='char']").val();
				code = char.charCodeAt(0);

				alert("Код символа: " + code);

				return false;
			});



			function validate_email(email){
				var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

				return validate(re, email);
			}


			function validate(regex, str){
				return regex.test(str);
			}
		});