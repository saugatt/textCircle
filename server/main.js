this.Documents = new Mongo.Collection("documents"); /*Creating collection
Writing this documents so that the package we use have access
 Documents table
*/
import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
  if (!Documents.findOne()) {// no documents yet
    Documents.insert({title: "my new document"});
  }
});
