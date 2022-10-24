hexo.extend.filter.register('theme_inject', function(injects) {
    injects.style.push('source/_data/recent_posts.styl');
    injects.header.file('recent_posts', 'source/_data/recent_posts.njk');
});
