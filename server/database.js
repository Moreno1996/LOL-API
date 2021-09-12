import mongo from "mongodb";
import { database_url } from "./constants/constants.js";

const db_name = "league";
var MongoClient = mongo.MongoClient;
export const db_find = async (collection_name, query = {}, projection = {}) => {
  const client = await MongoClient.connect(database_url).catch((err) => {
    console.error("MORENO ERROR", err);
  });
  if (!client) {
    return;
  }

  try {
    var dbo = client.db(db_name);
    let collection = dbo.collection(collection_name);

    let result = await collection
      .find(query, { projection: projection })
      .toArray();
    return result;
  } catch (err) {
    console.error("MORENO ERROR", err);
  } finally {
  }
};
export const db_find_one = async (
  collection_name,
  query = {},
  projection = {}
) => {
  const client = await MongoClient.connect(database_url).catch((err) => {
    console.error("MORENO ERROR", err);
  });
  if (!client) {
    return;
  }

  try {
    var dbo = client.db(db_name);
    let collection = dbo.collection(collection_name);

    let result = await collection.findOne(query, { projection: projection });

    return result;
  } catch (err) {
    console.error("MORENO ERROR", err);
  } finally {
  }
};
export const db_update_one = async (
  collection_name,
  filter = {},
  value = {}
) => {
  const client = await MongoClient.connect(database_url).catch((err) => {
    console.error(err);
  });
  if (!client) {
    return;
  }
  try {
    var dbo = client.db(db_name);
    let collection = dbo.collection(collection_name);
    const result = collection.updateOne(
      filter,
      { $set: value },
      { upsert: true }
    );
    return result;
  } catch (err) {
    console.error(err);
  }
};
export const db_distinct = async (collection_name, field_name) => {
  const client = await MongoClient.connect(database_url).catch((err) => {
    console.error(err);
  });
  if (!client) {
    return;
  }
  try {
    var dbo = client.db(db_name);
    let collection = dbo.collection(collection_name);
    const result = collection.distinct(field_name);
    return result;
  } catch (err) {
    console.error(err);
  }
};
