/**
 * Based on Pomodoro Logger by Zixuan Chen
 * Original: https://github.com/zxch3n/PomodoroLogger
 * Modified by: Serzhan Akhmetov
 * 
 * Licensed under GPL-3.0
 */

import { autoUpdater } from 'electron-updater';
import { GithubOptions } from 'builder-util-runtime';

export class AutoUpdater {
    constructor(logger: any) {
        this.init(logger);
    }

    init(sendStatusToWindow: any) {
        autoUpdater.on('checking-for-update', () => {
            console.log('Checking for update...');
        });
        autoUpdater.on('update-available', info => {
            console.log('update available');
            sendStatusToWindow('update-available', `Version: ${info.version}; ${info.releaseName}`);
        });
        autoUpdater.on('update-not-available', info => {
            console.log('update not available');
        });

        autoUpdater.on('error', err => {
            sendStatusToWindow('error', 'Error in auto-updater. ' + err);
            sendStatusToWindow('error', err);
        });
        autoUpdater.on('download-progress', progressObj => {
            let log_message = 'Download speed: ' + progressObj.bytesPerSecond;
            log_message = log_message + ' - Downloaded ' + progressObj.percent + '%';
            log_message =
                log_message + ' (' + progressObj.transferred + '/' + progressObj.total + ')';
            console.log(log_message);
            sendStatusToWindow('download-progress', {
                percent: progressObj.percent,
                bytesPerSecond: progressObj.bytesPerSecond
            });
        });
        autoUpdater.on('update-downloaded', info => {
            console.log(info);
            sendStatusToWindow('update-downloaded', 'Update downloaded');
        });
    }

    checkUpdate() {
        const data = {
            provider: 'github',
            owner: 'siaarzh',
            repo: 'pomodoro-commander'
        } as GithubOptions;
        autoUpdater.setFeedURL(data);
        autoUpdater.autoDownload = false;
        autoUpdater.checkForUpdates();
    }

    download() {
        autoUpdater.autoInstallOnAppQuit = true;
        autoUpdater.downloadUpdate();
    }
}
