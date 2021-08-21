import { Properties } from "models/Properties";

export class Feature {
	public type: string = "Feature";
  public id: string = "";
  public properties: Properties = new Properties();
}