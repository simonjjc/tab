(function(){
	var tabTitles = document.querySelectorAll('.js-tab-title'),
		titlesArray = [].slice.apply(tabTitles),//类数组转成数组的方式；
		contents = document.querySelectorAll('.js-tab-content'),
		contentsArray = [].slice.apply(contents);

	titlesArray.map(function(title){
		title.addEventListener('click', function(event){
			//定义变量
			var siblings = event.target.parentNode.childNodes,
			 	siblingsArray = [].slice.apply(siblings),
			 	currentIndex = event.target.dataset.index;

			//移除兄弟节点的active类
			siblingsArray.map(function(sibling){
				
				if (sibling.nodeType==1) {
					sibling.classList.remove('active');	
				}
			});

			//添加当前节点的ACTIVE 类
			event.target.classList.add('active')

			//移除所有content中的active类；
			contentsArray.map(function(el){
				if (el.nodeType==1) {
					el.classList.remove('active');
				}
			})

			//在对应的content上添加active类
			document.querySelector('.js-tab-content-'+currentIndex).classList.add('active');
			
		});
	});
})();