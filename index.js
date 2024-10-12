import robot from 'robotjs';
import moment from 'moment';
import chalk from 'chalk';
import { format, log, text } from './consts.js';
import { schedule, rate, status, intervalTime } from './configs.js';

var i = 0;

setInterval(() => {
  if (parseInt(i / 60) % 3 == 2 &&  i % 60 == 0) {
    var rand = parseInt(Math.random() * 10000) % 10;
    robot.keyToggle('alt', 'down');
    for (var j = 0; j < rand; j ++) {
      robot.keyTap('tab');
    }
    robot.keyToggle('alt', 'up');
  }
  else if (i % (60) == 0) {
    var rand = parseInt(Math.random() * 10000) % 10;
    robot.keyToggle('control', 'down');
    for (var j = 0; j < rand; j ++) {
      robot.keyTap('tab');
    }
    robot.keyToggle('control', 'up');
  }
  else if (i % 10 < 5) {
    robot.keyTap('up');
  }
  else {
    robot.keyTap('down');
  }

  if (i % 7 == 0) {
    robot.scrollMouse(50, 0);
  }
  i = (i + 1);
}, 1000);
