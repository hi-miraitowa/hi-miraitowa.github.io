const ap = new APlayer({
    container: document.getElementById('aplayer'),
    autoplay: false,
    loop: 'all',
    volume: 0.7,
    listFolded: true,
    listMaxHeight: 60,
    audio: [
        {
            name: '无名之辈',
            artist: '陈雪然',
            url: '/music/无名之辈-《亲爱的，热爱的》电视剧主题曲 - 陈雪燃.flac',
            cover: 'cover1.jpg',
        },
        {
            name: 'name2',
            artist: 'artist2',
            url: 'url2.mp3',
            cover: 'cover2.jpg',
        }
    ]
});