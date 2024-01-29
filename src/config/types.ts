export interface IAppConfig {
	env:EnvironmentType,
	minmathiUri: string
}

export type EnvironmentType = "production"|"development"|"testing"
