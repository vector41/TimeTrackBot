# Welcome to Robot

Hi! This is my first Robot project in **NodeJS**. If you want to cheat some program or someone, you can use this. Once you have finished with it, you can enjoy your nap.

## Guide

### Explanation

Robot automatically let you down CTRL keyboard for a specific interval  and rate. You can check if it is triggered or not in console. The console simply shows a text with green and red background color. The green background means triggered and the red one means the trigger just skipped because of rate you set. You can change the text in [consts.js](https://github.com/ADevStalker/robot/blob/master/consts.js).

### Configuration

You can use Robot by modifying the [configure.js](https://github.com/ADevStalker/robot/blob/master/configs.js).
| Variable | Description |
|--|--|
| normal_schedule | Array of Objects that contains start time and end time to trigger keyboard event. |
| rate | Percentage to trigger keyboard event. Value between 0 to 100|
| status | Set the status of Robot. Can be 'ON', 'NORMAL', 'OFF' |

> Note: Please use this program carefully with stealth mode. And please notice that your CTRL key can be downed anytime. Please be aware of this.
