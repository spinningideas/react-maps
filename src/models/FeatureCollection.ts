import { Feature } from "models/Feature";

export class FeatureCollection {
	public type: string = "FeatureCollection";
  public features: Feature[] = [];
}