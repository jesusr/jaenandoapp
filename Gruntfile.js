module.exports = function(grunt) {
  'use strict';
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    clean: ['tmp', 'dist'],
    version: {
      options: {
        prefix: '@version\\s+'
      },
      defaults: {
        src: ['dist/version']
      }
    },
    concat: {
      options: {
        separator: ';',
        sourceMap: true
      },
      target: {
        files: {
          'dist/<%= pkg.name %>.dist.js': [
            'src/app/**/*.module.js',
            'src/app/**/*.js',
            'src/app/app.js',
            '<%= ngtemplates.dist.dest %>'
          ]
        }
      }
    },
    'ngAnnotate': {
      options: {
        singleQuotes: true,
        separator: ';'
      },
      dist: {
        files: {
          'dist/<%= pkg.name %>.dist.js': ['dist/<%= pkg.name %>.dist.js']
        }
      }
    },
    'ngtemplates': {
      dist: {
        src: 'src/app/**/*.html',
        dest: 'www/dist/templates.js',
        options: {
          module: 'app',
          url: function(url) {
            return url.substr(url.indexOf('src') + 'src'.length);
          }
        }
      }
    },
    uglify: {
      dist: {
        options: {
          banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n',
          sourceMap: true,
          sourceMapIn: 'dist/<%= pkg.name %>.dist.js.map',
          sourceMapName: 'dist/<%= pkg.name %>.dist.min.js.map',
          mangle: false,
          compress: true
        },
        files: {
          'dist/<%= pkg.name %>.dist.min.js': [
            'dist/<%= pkg.name %>.dist.js'
          ]
        }
      }
    },
    'sass_globbing': {
      main: {
        files: {
          'src/assets/sass/maps/_base.scss': 'src/assets/sass/partial/*.scss',
          'src/assets/sass/maps/_components.scss': 'src/app/components/**/*.scss'
        },
        options: {
          useSingleQuotes: false
        }
      }
    },
    sass: {
      dist: {
        files: {
          'dist/<%= pkg.name %>.dist.css': 'src/assets/sass/main.scss'
        }
      },
      options: {
        style: 'expanded'
      }
    },
    cssmin: {
      options: {
        sourceMap: true
      },
      target: {
        files: {
          'dist/<%= pkg.name %>.dist.min.css': [
            'dist/<%= pkg.name %>.dist.css'
          ]
        }
      }
    },
    copy: {
      img: {
        cwd: 'src/assets/',
        src: 'images/**',
        dest: 'dist/',
        expand: true
      },
      fonts: {
        cwd: 'src/assets/',
        src: 'fonts/**',
        dest: 'dist/',
        expand: true
      },
      dist: {
        src: 'dist/**',
        dest: 'www/',
        expand: true
      }
    },
    jshint: {
      options: {
        reporter: require('jshint-html-reporter'),
        reporterOutput: 'check-style/jshint-report.html',
        jshintrc: '.jshintrc'
      },
      all: ['Gruntfile.js', 'src/app/*.js', 'src/app/**/*.js']
    },
    jscs: {
      src: ['Gruntfile.js', 'src/app/*.js', 'src/app/**/*.js'],
      options: {
        config: '.jscsrc',
        esnext: false, // If you use ES6 http://jscs.info/overview.html#esnext
        verbose: true, // If you need output with rule names http://jscs.info/overview.html#verbose
        reporter: require('jscs-html-reporter').path,
        reporterOutput: 'check-style/jscs-report.html'
      }
    },
    watch: {
      scripts: {
        files: ['src/**/*.js', 'src/**/*.html'],
        tasks: ['distjs', 'notify:watch'],
        options: {
          spawn: false,
          livereload: false
        }
      },
      sass: {
        files: ['src/**/**/*.scss', 'src/app/components/**/*.scss'],
        tasks: ['distcss', 'notify:watch'],
        options: {
          spawn: false,
          livereload: false
        }
      },
      version: {
        files: ['package.json'],
        tasks: ['version', 'dist', 'notify:watch'],
        options: {
          spawn: false
        }
      }
    },
    notify: {
      watch: {
        options: {
          message: 'Code updated by watch succesfully!' //required
        }
      },
      dist: {
        options: {
          message: 'Files created by dist succesfully!'
        }
      }
    },
    concurrent: {
      target: {
        tasks: ['watch:scripts', 'watch:sass', 'watch:version', 'shell'],
        options: {
          logConcurrentOutput: true
        }
      },
      conc: {
        tasks: ['watch:scripts', 'watch:sass', 'watch:version'],
        options: {
          logConcurrentOutput: true
        }
      }
    },
    shell: {
      options: {
        stderr: false
      },
      target: {
        command: 'cd www && startserver 8085'
      }
    },
    'bower_concat': {
      all: {
        dest: 'dist/libs.js',
        cssDest: 'dist/libs.css',
        dependencies: {
          'angular-route': 'angular'
        },
        bowerOptions: {
          relative: false
        }
      }
    }
  });

  // ----- PLUGINS ------
  grunt.loadNpmTasks('grunt-bower-concat');
  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-concurrent');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-version');
  grunt.loadNpmTasks('grunt-libsass');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-sass-globbing');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-ng-annotate');
  grunt.loadNpmTasks('grunt-angular-templates');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-notify');
  grunt.loadNpmTasks('grunt-jscs');
  // ----- OTHER TASKS ------
  grunt.registerTask('distjs', [
    'jshint', 'jscs', 'ngtemplates', 'concat', 'ngAnnotate', 'uglify', 'bower_concat', 'copy'
  ]);
  grunt.registerTask('distcss', ['sass_globbing:main', 'sass', 'cssmin', 'copy']);
  grunt.registerTask('dist', 'Task to create a distribution release.', [
    'clean', 'version', 'distcss', 'distjs'
  ]);
  grunt.registerTask('default', ['dist', 'notify:dist', 'concurrent:target']);
};

