// gulp的配置文件
const {task,src,dest,watch,series,parallel} = require('gulp');
const load = require('gulp-load-plugins')();//批量加载gulp插件
const del = require('del');

task('del', async ()=>{
    await del(['./dist']);//删除原来的dist目录
})

// 处理css文件
task('css',async ()=>{
    src(['./src/css/*.css'])//读取文件
    .pipe(load.minifyCss())//压缩css
    .pipe(dest('./dist/css'))//写入dist目录下
    .pipe(load.connect.reload())
})

// 处理js文件
task('js',async ()=>{
    src(['./src/javascript/*.js'])//读取文件
    .pipe(load.babel({presets: ['@babel/preset-env']}))// 转成es5
    //.pipe(load.uglify())//压缩js
    .pipe(dest('./dist/javascript'))//写入dist目录下
    .pipe(load.connect.reload())
})

// 处理html
task('html',async ()=>{
    src('./src/html/*.html')//读取文件
    .pipe(load.minifyHtml())//压缩html
    .pipe(dest('./dist/html'))//写入dist目录下
    .pipe(load.connect.reload())
})

// 处理图片
task('img', async ()=>{
    src('./src/img/*.*')
    .pipe(dest('./dist/img'))
    .pipe(load.connect.reload())
})

task('imgs', async ()=>{
    src('./src/imgs/*.*')
    .pipe(dest('./dist/imgs'))
    .pipe(load.connect.reload())
})

// 
task('font', async ()=>{
    src('./src/font_z1ozmaw99k/*.*')
    .pipe(dest('./dist/font_z1ozmaw99k'))
    .pipe(load.connect.reload())
})
//php
task('php', async ()=>{
    src('./src/php/*.php')
    .pipe(dest('./dist/php'))
    .pipe(load.connect.reload())
})


//php
task('php2', async ()=>{
    src('./src/html/*.php')
    .pipe(dest('./dist/html'))
    .pipe(load.connect.reload())
})

// 启动web服务器，开启自动刷新
task('connect',async ()=>{
    load.connect.server({
        root: './dist',// 设置根目录
        livereload: true// 开启自动刷新
    });
})

// 监听文件变化，重新合并文件
task('watch',async ()=>{
    watch(['./src/html/*.html'],series('html'));
    watch(['./src/css/*.css'],series('css'));
    watch(['./src/js/*.js'],series('js'));
    watch(['./src/imgs/*.*'],series('img'));
})

// 启动服务，开始监听
task('default',series('connect','watch'));

// 构建项目
task('build',series('del',parallel('html','js','css','img','imgs','font','php','php2')));
