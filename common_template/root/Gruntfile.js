'use strict';

module.exports = function(grunt) {
  grunt.initConfig({
     connect: {
      options: {
        port: 2211,
        hostname: '127.0.0.1', //默认就是这个值，可配置为本机某个 IP，localhost 或域名
        livereload: 35222  //声明给 watch 监听的端口
      },

      server: {
        options: {
          open: true, //自动打开网页 http://
          base: [
            ''  //主目录
          ]
        }
      }
    },
    watch: {
      css: {
        files: 'less/style.less',
        tasks: ['less']
      },
      livereload: {
        options: {
          livereload: '<%=connect.options.livereload%>'  //监听前面声明的端口  35729
        },

        files: ['*','css/style.min.css']
      }
    },
    less: {
      build: {
        options: {
          //style: 'compressed',
          //compress: true
        },
        files: {
          'css/style.min.css': 'less/style.less'
        }
      }
    }
  });
  grunt.loadNpmTasks('../../../node_modules/grunt-contrib-connect');
  grunt.loadNpmTasks('../../../node_modules/grunt-contrib-less');
  grunt.loadNpmTasks('../../../node_modules/grunt-contrib-watch');

  grunt.registerTask('default', ['connect','less', 'watch']);

};