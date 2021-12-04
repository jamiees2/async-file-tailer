/// <reference types="node" />
import * as fs from "fs/promises";
import type { FSWatcher, BigIntStats } from "fs";
declare type WatcherSetup = {
    running: boolean;
};
declare type Descriptor = {
    fd: fs.FileHandle;
    buffer: string;
    stat: BigIntStats;
};
declare type IteratorState<T> = {
    running: boolean;
    push_queue: Array<T>;
    pull_queue: Array<(v: IteratorYieldResult<T>) => void>;
};
declare type WatchEvent = {
    eventType: "change" | "rename";
    filename: string;
};
declare type FSWatcherWithIterator = FSWatcher & {
    stat: BigIntStats;
    [Symbol.asyncIterator]: () => any;
};
declare class FileTailer {
    filepath: string;
    watcher: FSWatcherWithIterator | null;
    watching: boolean;
    watcher_setup: WatcherSetup | null;
    descriptor: Descriptor | null;
    logger: Console;
    constructor(filepath: string, logger?: Console);
    watch(): AsyncGenerator<string, void, unknown>;
    _openFile(filepath: string): Promise<Descriptor | null>;
    _watchIterator(iterator_state: IteratorState<WatchEvent>): {
        next(): Promise<IteratorResult<WatchEvent, undefined>>;
    };
    _setupWatcher(): Promise<FSWatcherWithIterator | null>;
    _readLines(descriptor: Descriptor | null): AsyncGenerator<string, void, unknown>;
    stop(): void;
}
export default FileTailer;
