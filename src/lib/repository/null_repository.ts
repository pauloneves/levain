import Config from "../config.ts";
import Package from "../package/package.ts";
import AbstractRepository from './abstract_repository.ts';

export default class NullRepository extends AbstractRepository {
    name = 'nullRepo';
    packages: Array<Package> = [];

    constructor(private config: Config) {
        super();
    }

    get absoluteURI(): string {
        return this.name;
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    resolvePackage(packageName: string): Package | undefined {
        return undefined;
    }

    listPackages(rootDirOnly?: boolean): Array<Package> {
        return [];
    }
}
