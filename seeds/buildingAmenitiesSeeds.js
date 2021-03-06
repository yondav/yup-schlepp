const { BuildingAmenities } = require('../models');

const buildingAmenitiesData = [
  {
    pets_allowed: true,
    roof: false,
    courtyard: true,
    concierge: false,
    doorman: false,
    elevator: false,
    laundry: true,
    children_playroom: false,
    gym: true,
    media_room: false,
    recreation_room: false,
    swimming_pool: false,
    live_in_super: false,
    smoke_free: false,
    wheelchair_access: false,
    garage_parking: false,
    valet_parking: false,
    bike_room: false,
    cold_storage: false,
    locker_cage: false,
    package_room: false,
    building_id: 1,
  },
  {
    pets_allowed: true,
    roof: true,
    courtyard: true,
    concierge: false,
    doorman: false,
    elevator: false,
    laundry: false,
    children_playroom: false,
    gym: false,
    media_room: true,
    recreation_room: false,
    swimming_pool: false,
    live_in_super: false,
    smoke_free: false,
    wheelchair_access: false,
    garage_parking: false,
    valet_parking: false,
    bike_room: false,
    cold_storage: false,
    locker_cage: false,
    package_room: false,
    building_id: 2,
  },
  {
    pets_allowed: true,
    roof: true,
    courtyard: true,
    concierge: false,
    doorman: false,
    elevator: false,
    laundry: false,
    children_playroom: false,
    gym: false,
    media_room: true,
    recreation_room: false,
    swimming_pool: false,
    live_in_super: false,
    smoke_free: true,
    wheelchair_access: false,
    garage_parking: true,
    valet_parking: false,
    bike_room: true,
    cold_storage: false,
    locker_cage: false,
    package_room: false,
    building_id: 3,
  },
];

const seedBuildingAmenities = () => BuildingAmenities.bulkCreate(buildingAmenitiesData);

module.exports = seedBuildingAmenities;
