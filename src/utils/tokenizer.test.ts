import { getWeightsFromPomodoros, Tokenizer } from './tokenizer';
import { PomodoroRecord, TitleSpentTimeDict } from '../renderer/monitor/type';
import { generateRandomName } from '../renderer/utils';

const tokenizer = new Tokenizer();

function expectTokenizer(input: string, output: string[]) {
    expect(tokenizer.tokenize(input)).toStrictEqual(output);
}

describe('Tokenizer', () => {
    it('tokenizes path', () => {
        expectTokenizer('zxch3n/react-trend: Simple, elegant spark lines - Google Chrome', [
            'zxch3n',
            'react-trend',
            'Simple',
            'elegant',
            'spark',
            'lines',
            'Google',
            'Chrome',
        ]);

        expectTokenizer('C:\\CODE\\js\\pomodoro-commander', [
            'C',
            'CODE',
            'js',
            'pomodoro-commander',
        ]);

        expectTokenizer('/home/dat/project/pomodoro-commander', [
            'home',
            'dat',
            'project',
            'pomodoro-commander',
        ]);

        expectTokenizer('/home/.bin/.vscode', ['home', 'bin', 'vscode']);
    });

    it('hard case', () => {
        expectTokenizer('Issues · aaabbb/bbbaaa - Google Chrome', [
            'Issues',
            'aaabbb',
            'bbbaaa',
            'Google',
            'Chrome',
        ]);

        expectTokenizer('time-logger [C:\\a\\b\\c-d] - ...\\.circleci\\config.yml - WebStorm', [
            'time-logger',
            'C',
            'a',
            'b',
            'c-d',
            'circleci',
            'config.yml',
            'WebStorm',
        ]);
    });

    it("doesn't ignore suffix", () => {
        expectTokenizer('Editing vis/README.md at master · abcd/pppp - Google Chrome', [
            'Editing',
            'vis',
            'README.md',
            'at',
            'master',
            'abcd',
            'pppp',
            'Google',
            'Chrome',
        ]);

        expectTokenizer('App.exe a.jpg b.test.js c.test.jpg End.', [
            'App.exe',
            'a.jpg',
            'b.test.js',
            'c.test.jpg',
            'End',
        ]);
    });

    it('tokenize number', () => {
        expectTokenizer('Untitled-1 @ 8.33% (Layer 8, RGB/8) *', [
            'Untitled-1',
            '8.33',
            'Layer',
            '8',
            'RGB',
            '8',
        ]);
    });
});

function createRecordFromTitlesAndWeights(pairs: [string, number][]) {
    const record: PomodoroRecord = {
        switchActivities: [],
        _id: generateRandomName(),
        apps: {},
        switchTimes: 10,
        startTime: 100,
        spentTimeInHour: 0.3,
    };

    let index = 0;
    for (let i = 0; i < pairs.length; i += 10) {
        const titleSpentTime: TitleSpentTimeDict = {};
        for (let j = i; j < pairs.length && j < i + 10; j += 1) {
            const pair = pairs[j];
            titleSpentTime[pair[0]] = {
                index,
                normalizedWeight: pair[1],
                occurrence: pair[1] * 100,
            };

            index += 1;
        }

        record.apps[i.toString()] = {
            titleSpentTime,
            spentTimeInHour: 0.1,
            appName: i.toString(),
        };
    }

    return record;
}

function pairToDict(pairs: [string, number][]): { [name: string]: number } {
    const ans: { [n: string]: number } = {};
    for (const pair of pairs) {
        ans[pair[0]] = Math.floor(pair[1] + 0.5);
    }

    return ans;
}

function expectWeights(records: PomodoroRecord[], weights: { [n: string]: number }) {
    const pred = getWeightsFromPomodoros(records);
    expect(pairToDict(pred)).toStrictEqual(weights);
}

describe('Tokenizer.getTokenWeightsFromRecords', () => {
    it('aggregates empty data correctly', () => {
        expect(getWeightsFromPomodoros([])).toStrictEqual([]);
    });

    it('aggregates one record correctly', () => {
        const record = createRecordFromTitlesAndWeights([
            ['expect(getWeightsFromPomodoros([])).toStrictEqual([]);', 1],
        ]);

        expectWeights([record], {
            expect: 56,
            getWeightsFromPomodoros: 56,
            toStrictEqual: 56,
        });
    });

    it('aggregates records correctly', () => {
        const records = [
            createRecordFromTitlesAndWeights([
                ['const weight normalizedWeight;', 3],
                ['Math.min--;', 1],
            ]),
            createRecordFromTitlesAndWeights([
                ['targetMin: number = 12', 3],
                ['MiddleSize', 2],
                ['targetMax', 1],
            ]),
        ];

        expectWeights(records, {
            const: 56,
            weight: 56,
            normalizedWeight: 56,
            'Math.min': 8,
            targetMin: 56,
            number: 56,
            '12': 56,
            targetMax: 8,
            MiddleSize: 32,
        });
    });
});

describe('Tokenizer.getTokenWeightsFromCards', () => {
    it('should calc cards weight correctly', () => {});
});
